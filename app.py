#!/usr/bin/env python3

import aws_cdk as cdk

from aws_static_website.aws_static_website_stack import StaticWebsiteStack

app = cdk.App()

StaticWebsiteStack(
    app,
    "StaticWebsiteStack"
)

app.synth()
