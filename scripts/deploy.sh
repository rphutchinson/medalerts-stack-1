#!/bin/sh

# Don't deploy pull requests. Pull requests will have a $PULL_REQUEST value of #123
# or whatever number they happen to be; otherwise $PULL_REQUEST will be "false".
if [ $PULL_REQUEST = "false" ]; then
    echo "Packaging and deploying version" $COMMIT
else
    echo "Skip deployment phase. Pull Requests are not deployed automatically."
    exit 0
fi

#use SBT plugin to prepare the app for Docker. copies files to target/docker
echo "Running sbt docker:stage command"
sbt docker:stage

#package the docker output into a zip file. Expects to be in project root directory
echo "Packaging zip file for deployment"
cd target/docker
zip -r ../$COMMIT.zip * #creates target/1234.zip
cd ../..


#use AWS CLI to copy the zip file up to S3 and update EB with the new version
echo "Using Amazon CLI to deploy zip file to EB environment"
aws s3 cp target/$COMMIT.zip s3://18f-deploy/18f-$COMMIT.zip
aws elasticbeanstalk create-application-version --application-name "sparc18f" --version-label $COMMIT --source-bundle S3Bucket="18f-deploy",S3Key="18f-$COMMIT.zip"
aws elasticbeanstalk update-environment --environment-name "sparc18f" --version-label $COMMIT

echo Elastic Beanstalk dev environment updated with version $COMMIT
exit 0