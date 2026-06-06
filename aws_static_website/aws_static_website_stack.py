from aws_cdk import (
    Stack,
    RemovalPolicy,
    aws_s3 as s3,
    aws_cloudfront as cloudfront,
    aws_cloudfront_origins as origins,
    aws_s3_deployment as s3deploy
)

from constructs import Construct


class StaticWebsiteStack(Stack):

    def __init__(self, scope: Construct, construct_id: str, **kwargs):
        super().__init__(scope, construct_id, **kwargs)

        bucket = s3.Bucket(
            self,
            "WebsiteBucket",
            block_public_access=s3.BlockPublicAccess.BLOCK_ALL,
            removal_policy=RemovalPolicy.DESTROY,
            auto_delete_objects=True
        )

        oai = cloudfront.OriginAccessIdentity(
            self,
            "OAI"
        )

        bucket.grant_read(oai)

        distribution = cloudfront.Distribution(
            self,
            "WebsiteDistribution",
            default_behavior=cloudfront.BehaviorOptions(
                origin=origins.S3BucketOrigin.with_origin_access_identity(
                        bucket,
                        origin_access_identity=oai
                )
            ),
            default_root_object="index.html"
        )

        s3deploy.BucketDeployment(
            self,
            "DeployWebsite",
            destination_bucket=bucket,
            sources=[
                s3deploy.Source.asset("./website")
            ],
            distribution=distribution,
            distribution_paths=["/*"]
        )