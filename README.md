# MedPal Pool Three

Check out the [live demo](http://medpal.sparcedge.com) or see our [installation instructions](INSTALLATION.md).

[SPARC](http://sparcedge.com) began by evaluating the [FDA's](http://www.fda.gov/) role and mission with laser focus on determining the most simple, yet impactful way to bolster the health and well-being of the largest percentage of the population as feasible. After timely assessment of applications that would align to the FDA's goals, SPARC created an application that allows consumers to research individual medications for recalls, label changes, and drug interaction data. 

## Understand What People Need

SPARC utilized a [design studio approach](https://18f.gsa.gov/2014/09/25/design-studio-onrr/) to select a direction based on impact to the [Open FDA’s](https://open.fda.gov/) stated business goals, usefulness, and technical feasibility. Research revealed adverse drug effects had a significant impact of [106,000 yearly deaths at an estimated cost of $135 billion per year](http://www.fda.gov/Drugs/DevelopmentApprovalProcess/DevelopmentResources/DrugInteractionsLabeling/ucm110632.htm). Based on this research, impact to the user and the FDA’s stated business goals, we narrowed focus to drug safety. 

## Address the Whole Experience from Start to Finish

SPARC’s [Agile Design process](http://www.sparcedge.com/what-an-agile-design-process-looks-like/) allowed our team to iterate on a broad concept of drug safety and focus on what would have the highest value and provide a useful experience for the user. Our product leverages OpenFDA and [RxNav Drug Interactions](http://rxnav.nlm.nih.gov/InteractionAPIs.html#) API which is provided by the U.S. National Library of Medicine to proactively educate users about their medications through an intuitive user experience.

With the entirety of the user experience in mind, we wanted to ensure that each user could:

* Access the experience from a desktop or mobile browser
* See medication recalls and the impact of drug changes
* Search for a medication and create a personalized list of medications 
* ‘Follow’ their medications and automatically receive updates, much like other social media applications
* View potentially harmful drug interactions 

We leveraged a series of clickable [InVision](http://www.invisionapp.com/) prototypes to quickly test our assumptions, discover if the user experience was intuitive, fulfill our stated business goals, and iterate on the user flow & functionality.

## Make it Simple and Intuitive

Through rapid prototyping, feedback and iteration, we discovered that “following” a medication would provide a more intuitive experience for tracking drug changes over time and reduced the applications user-flow to a single screen experience. 
SPARC used [AngularJS](https://angularjs.org/) and [Bootstrap](http://getbootstrap.com/) as a flexible front-end framework for the application. Bootstrap provides standardized responsive design utilities, allowing the user to view the application on a variety of devices and platforms.

Our Agile Design process consisted of: 

**User & Technical Research**

* Definition of Business Goals 
* Technical research into OpenFDA API 
* Design Studio with Designers, developers and a scrum master to brainstorm and vetting based on business goals, technical feasibility, and usefulness to the User
* User research 
* Refinement of initial concept

**Rapid Prototyping** 

* User flows
* Wireframes
* User testing & heuristics through clickable InVision prototype(s)
* Iterations to the wireframes based on feedback

**Visual refinement **

* [Style tiles](http://styletil.es/) for visual concepts
* UI design
* Coded pattern library
* Design iterations with developers

## Build the Service Using Agile and Iterative Practices

SPARC operated on a daily sprint cadence with stand-ups, reviews, and retrospectives. SPARC stood up a dedicated 'war room' with high collaboration to create team synergy. Our team used [GitHub](https://github.com/) as the source code version control system and this repository was shared with each member of the project team. Setting up a continuous integration environment allowed the team to check in code and immediately see it compiled and deployed to the development environment. This risk reduction activity, coupled with local development builds, aimed to eliminate build failures during deployment.

At the original submission date of June 26th, we had [successfully completed version 1](https://github.com/sparcedge/medalerts-stack/releases/tag/v1.0) which was a responsive site, pulling data from openFDA, with design and style using Bootstrap. We leveraged the extension to compile a new backlog, incorporating additional features and data sources , as well as a more robust UI/UX design.

## Structure Budgets and Contracts to Support Delivery

SPARC executed with repeatable program management and performance-focused processes, using [Google Sheets](https://www.google.com/sheets/about/) for level of effort monitoring and daily milestone activities. 

## Assign One Leader and Hold That Person Accountable

SPARC assigned a Product Owner for leadership and accountability of the challenge prototype submission. The Product Owner ensured compliance to the [US Digital Services Playbook](https://playbook.cio.gov/), as well as added integrity to the agile scrum process.

## Bring in Experienced Teams

We assembled an experienced team of multi-disciplinary technical professionals to develop the prototype. This team included six labor categories, see Attachment C.

## Chose a Modern Technology Stack

At every layer of the stack, we explored Open Source Software solutions. For example, and as mentioned above, this application uses:

* [Play Framework](https://www.playframework.com/)
* [Scala](http://www.scala-lang.org/)
* [AngularJS](https://angularjs.org/)
* [lodash](https://lodash.com/)

**Visual / Design Layer**

* [Bootstrap](http://getbootstrap.com)
* [Google Fonts](https://www.google.com/fonts)

**QA Layer**

* [Scala Test](http://scalatest.org/)
* [Jasmine](http://jasmine.github.io/)
* [Karma](http://karma-runner.github.io/0.12/index.html)

**DevOps Layer**

* [Docker](https://www.docker.com/)
* [GulpJS](http://gulpjs.com/)

We chose Play Framework using Scala, AngularJS, Bootstrap and lodash as our core software framework. This allowed us to be more stateless, distributed, scalable, responsive and flexible than traditional frameworks.

The application consists of a server side API built on Play Framework and implemented using the Scala programming language. Play and Scala have built-in support for asynchronous, non-blocking, data processing which made a great fit for our requirements for data aggregation from multiple data sources. 

Play is tightly integrated with the [Typesafe Activator](https://www.typesafe.com/get-started) platform. Activator enables rapid project scaffolding to allow the team to get started implementing the actual business requirements on day one instead of wrestling with project configuration and infrastructure concerns.

The second part of the application, the JavaScript client-side web application, uses the latest stable version of AngularJS as the core framework. Another component of the client side application is utility library, lodash. lodash utilizes the same functional programming paradigm from the Scala application in the JavaScript application. lodash is particularly well-suited to data transformations which are a key piece of this application.

In order to support responsive design principles and application functionality on multiple device types we used the Bootstrap css framework. 

The application build process uses sbt which is a requirement for Play Framework applications. Additionally, the build forks a separate process that runs Node.js and Gulp to process JavaScript and .less assets.

This software can be deployed on a variety of commodity hardware types; e.g., we have provided [installation instructions](INSTALLATION.md) for [Yosemite](https://en.wikipedia.org/wiki/OS_X_Yosemite) and [Debian](https://www.debian.org/) based systems and have deployed to [Amazon Web Services](http://aws.amazon.com/), as well as [Vagrant](https://www.vagrantup.com/), and [Ubuntu Vivid](http://releases.ubuntu.com/15.04/) images.

## Deploy in a Flexible Hosting Environment

SPARC deployed to [Amazon Web Services](http://aws.amazon.com/) (AWS) for a flexible infrastructure to ensure real-time resources provisioning via APIs.

With Amazon Web Services, resources are provisioned on demand and can scale through multiple regions and availability zones. This application is currently set up with [Elastic Beanstalk](http://aws.amazon.com/elasticbeanstalk/) in one region with subnets in multiple availability zones. [AWS CloudFront](http://aws.amazon.com/cloudfront/) is our content delivery network (CDN) serving static application resources from [S3](http://aws.amazon.com/s3/).

## Automate Testing and Deployments

The entire team ensured that each sprint ended with a high quality, production-ready deliverable. In addition to standard functional testing activities, SPARC implemented functional testing activities such as unit and integration testing, as well as security, performance, usability, and accessibility testing. We conducted automated testing using Scala Test for Scala, Jasmine for javascript, and Karma for AngularJS.

Unit tests using ScalaTest for server side and Jasmine for client side testing are included in the source code and run as part of an automated build and deployment process. The builds are run on CI service, [Shippable](https://app.shippable.com/), packaged as a Docker image using the Scala sbt docker plugin, then automatically deployed to Amazon’s Elastic Beanstalk using the Elastic Beanstalk API.

Using Shippable, the SPARC team, set up a Continuous Integration and Deployment process, thus ensuring the code was deployed to Amazon Web Services (AWS), our IaaS provider, and that all unit tests were executed.

SPARC placed a heavy emphasis on automation for operation and maintenance activities, and leveraged tools such as Docker to automate the maintenance of deployments. 

## Manage Security and Privacy Through Reusable Processes

This prototype uses a deployment script and environment variables to ensure configuration of production environment remains consistent and controllable.

The [installation instructions](INSTALLATION.md) detail the steps to install and run this prototype on another machine and include scripts to automate the process.

The production application environment sits inside a virtual private cloud (VPC) within AWS. This allows us to utilize security groups and network access control lists (ACLs), which handle security and accessibility at both the instance level and subnet level.

## Use Data to Drive Decisions

To measure system performance and real-time application interaction, we chose [New Relic](http://newrelic.com/) for its ability to monitor real-time resource utilization, monitor real-time system and application performance, create automated alerts, track concurrent users in real-time, and monitor user and application behaviors, as well as publish metrics.

## Default to Open

We included an [email contact](mailto:18f@sparcedge.com) link to offer users a mechanism to report and respond to bugs and issues.

We also created an API layer for interacting with and aggregating results from openFDA services, as well as, demonstrating competency in OAuth2.

We open sourced all prototype code via GitHub and published our approach to development.
