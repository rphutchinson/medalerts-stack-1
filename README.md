# 18F Demo Application
Check out the [live demo](http://18f.sparcedge.com/) or see our [installation instructions](INSTALLATION.md) for the guide to standing this up yourself.

Also, please enjoy the following haikus our Technical Architect came up during this project


*tues 6/23*
> sparc team writing code  
> you should pick us 18f  
> look at our cool app

*wed 6/25*
> getting scared of drugs  
> so many ways to kill you  
> thank god for medalerts


##  Approach

### Operations Considerations

#### Structure Budgets and Contracts to Support Delivery
[SPARC](http://sparcedge.com) executed the [18F](https://18f.gsa.gov/) [OpenFDA](https://open.fda.gov/) prototype challenge with repeatable program management, cost, schedule, and performance focused processes, mirroring an actual contract deliverable. Our approach was devised to be fully and realistically executable as both a prototype challenge and a task order deliverable. 

#### Assign One Leader and Hold That Person Accountable
SPARC assigned a Product Owner for leadership and accountability of the challenge prototype submission. The Product Owner ensured compliance to the [US Digital Services Playbook](https://playbook.cio.gov/), as well as added an additional layer of integrity to the agile scrum process.

#### Bring in Experienced Teams
We assembled a small, collaborative team of multi-disciplinary technical and project/product management professionals to develop the prototype. This hand-picked team of experienced design, development and operations experts included a mix of over five labor categories from the proposed list to ensure we had the proper blend of management, design, development and operations expertise. Our cross-functional team operated using short iterations with a tight Subject Matter Expert, SME, feedback loop. 

### User Considerations

#### Understand What People Need
According to the FDA's research there are approximately 106,000 deaths per year attributed to adverse reactions to prescription drugs. One in five hospital visits are the result of a drug reaction. Additionally, adverse drug reactions are estimated to cost our country $135 Billion dollars a year. 

SPARC began by evaluating the FDA's role and mission with laser focus on determining the most simple, yet impactful way to bolster the health and well-being of the largest percentage of the population as feasible. After timely assessment of the possible applications that would align to the FDA's goals, SPARC created user personas to test and validate the pain points, as well as use cases associated with each of the proposed applications. Our application allows consumers to research individual drugs for recalls, label changes or be assured there have been no changes to their medication. Users may also create and monitor a list of drugs you use for possible changes in the future The team used both qualitative and quantitative data in tandem with research of the APIs and datasets to produce an application prototype that will assist users with managing prescription and over the counter drug recall information. 

#### Address the Whole Experience from Start to Finish
With the entirety of the user experience in mind, we wanted to ensure that each user could:

* access the experience from desktop or a modern mobile browser
* see visual information about recalls and the impact of drug changes/recalls on the public
* easily search for a drug name and add it to your list of drugs you take
* search against that list
* see results for recalls of drugs they listed

**_17 g. performed usability tests with people h. used an interactive approach, where feedback informed subsequent work or versions of the prototype_**

### Technical Considerations

#### Make it Simple and Intuitive
To achieve a simple and intuitive user experience with a responsive design, SPARC used [Bootstrap](http://getbootstrap.com/) as a flexible front-end framework for the application. Bootstrap's responsive design provided accessibility to the application, allowing the user to view the application on a variety of devices and platforms. 

**_used at least three “human-centered design” techniques or tools e. created or used a design style guide and/or a pattern library f. used at least three modern (see Note#2) and open source frontend or client side (see note #3) web technologies_**

**_c. understand what people need, by including people (see note #1) in the prototype design process_**

#### Build the Serivce Using Agile and Iterative Practices
SPARC incorporated agile principles of frequent delivery and customer engagement for execution. We operated on a daily sprint cadence with daily stand-ups and retrospectives to begin and end each day.  Utilizing a SPARC best practice of a dedicated 'war room' in combination with a high degree of collaboration via a one table approach and google chat, created synergy and high communication throughout each phase of development. SPARC conducted requirements activities to include user experience interviews, high fidelity wireframing, and collaborative requirements elicitation. User experience designers worked collaboratively with SMEs to ensure that feedback from these discussions were recognized and prioritized. This collaboration created product or feature backlog items and shaped the vision of the OpenFDA application. The first sprint included project infrastructure tasks such as architecture design, creating development environments, establishing continuous integration and deployment processes, and process definition activities. Our team used GitHub as the source code version control system and this repository was shared with each member of the project team. Setting up a continuous integration environment allowed the team to check in code and immediately see it compiled and deployed to the development environment. This is a risk reduction activity, coupled with local development builds, to eliminate build failures during deployment. 

The SPARC approach emphasized agile development as a set of loosely coupled components with well-defined APIs. SPARC placed a heavy emphasis on automation for operation and maintenance activities, and leveraged tools such as [Docker](https://www.docker.com/) to automate the maintenance of deployments. We used best of breed technologies such as [New Relic](http://newrelic.com/) to provide constant monitoring of the application in production and accelerated problem resolution. SPARC rapidly delivers software using agile processes while maintaining high levels of quality, predictability, and accountability. Our repeatable and proven approach includes project initiation, development, support and maintenance phases.

#### Automate Testing and Deployments
Although there were not team members with dedicated testing roles, the entire team ensured that each sprint ended with a high quality, production-ready deliverable. In addition to standard functional testing activities, SPARC implemented functional testing activities such as unit and integration testing, as well as security, performance, usability, and accessibility testing. Automated testing using [Scala Test](http://scalatest.org/) for Scala, [Jasmine](http://jasmine.github.io/) for javascript, and [Karma](http://karma-runner.github.io/0.12/index.html) for AngularJS.

Using [Shippable](https://app.shippable.com/), the SPARC team, set up a Continuous Integration and Deployment process, thus ensuring the code was deployed to [Amazon Web Services](http://aws.amazon.com/), our IaaS provider, and that all unit tests were executed.

#### Chose a Modern Technology Stack
Keeping in line with private-sector companies that create similar services, we choose [PlayFramework](https://www.playframework.com/) using [Scala](http://www.scala-lang.org/), [AngularJS](https://angularjs.org/), [Bootstrap](http://getbootstrap.com/) and [lodash](https://lodash.com/) as our core software framework.  This also allows us to be more stateless, distributed, scalable, responsive and flexible than traditional frameworks.

Further this software can be deployed on a variety of commodity hardware types; e.g., we have provided installation instructions for [Yosemite](https://www.apple.com/osx/) and [Debian](https://www.debian.org/) based systems and have deployed to [Amazon Web Services](http://aws.amazon.com/), as well as [Vagrant](https://www.vagrantup.com/) [Ubuntu Vivid](http://releases.ubuntu.com/15.04/) images. 

At every layer of the stack, Open Source Software solutions have been explored.  For example and as mention above, this application uses:

* Development Layer
  * [PlayFramework](https://www.playframework.com/) using [Scala](http://www.scala-lang.org/)
  * [AngularJS](https://angularjs.org/)
  * [lodash](https://lodash.com/)
* Visual / Design Layer
  * [Bootstrap](http://getbootstrap.com/)
  * [Google Fonts](https://www.google.com/fonts)
* QA Layer
  * [Scala Test](http://scalatest.org/)
  * [Jasmine](http://jasmine.github.io/)
  * [Karma](http://karma-runner.github.io/0.12/index.html)
  
### Use Data to Drive Decisions
In order to measure how well a system performs and how people are interacting with the system in real-time, SPARC has used tools from custom build solutions, to New Relic, to Spunk to Foglight.  For this prototype, we chose to use New Relic for it's ability to monitor system-level resource utilitztion in real-time, system performance in real-time, automated alerts, track concurrent users in real-time and monitor user behaviors, as well as publish metrics internally and externally.

### Default to Open
In an effort to offer users a mechanism to report bugs and issues, and be responsive to these reports, we included a contact email, we included an [email contact](mailto:18f@sparcedge.com) link in this prototpye.

We also created an API layer for interacting with and aggregating results from [openFDA](https://open.fda.gov/) services, as well as, for demonstrating competency in OAuth2.

Further, by the very nature of this RFQ, we are open sourcing all code for this prototype via GitHub and publishing our Approach to developing.

### Deploy in a Flexible Hosting Environment
To ensure we our services were deployed to a flexible infrastructure, where resources could be provisioned in real-time, via APIs to meet traffic spikes and user demand, and only pay for what we use, we chose Amazon Web Services.

With this approach resources are provisioned on demand and can scale through multiple regions.  This application is currently set up with one region, and multiple availability zones and AWS CloudFront on top of S3 for our Content Delivery Network.

### Manage Security and Privacy Through Reusable Processes
This protoptype uses a [deployment script](scripts/deploy.sh) and environment variables to ensure configuration of production environment remains consistent and controllable.

The [installation instructions](INSTALLATION.md) detail the steps to install and run this prototype on another machine and includes scripts to automate the process.

## License
In the spirit of open source software and keeping this prototype free of charge, this software is licensed under the MIT License. 

Please see our [license](LICENSE.md) regarding details rights and usage for this prototype.
