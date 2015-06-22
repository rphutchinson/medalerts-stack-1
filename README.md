# 18F Demo Application
Check out the [live demo](http://18f.sparcedge.com/) or see our [installation instructions](INSTALLATION.md) for the guide to standing this up yourself.

##  Approach

### OPERATIONS CONSIDERATIONS 
**STRUCTURE BUDGETS AND CONTRACTS TO SUPPORT DELIVERY**
SPARC executed the OpenFDA prototype challenge with repeatable program management, cost, schedule, and performance focused processes, mirroring an actual contract deliverable. Our approach was devised to be fully and realistically executable as both a prototype challenge and a task order deliverable. 

**ASSIGN ONE LEADER AND HOLD THAT PERSON ACCOUNTABLE**
SPARC assigned a Product Owner for leadership and accountability of the challenge prototype submission. The Product Owner ensured compliance to the US Digital Services Playbook, as well as added an additional layer of integrity to the agile scrum process.

**BRING IN EXPERIENCED TEAMS**
We assembled a small, collaborative team of multi-disciplinary technical and project/product management professionals to develop the prototype. This hand-picked team of experienced design, development and operations experts included a mix of over five labor categories from the proposed list to ensure we had the proper blend of management, design, development and operations expertise. Our cross-functional team operated using short iterations 
with a tight Subject Matter Expert, SME, feedback  loop. 

### USER CONSIDERATIONS 
**UNDERSTAND WHAT PEOPLE NEED**
According to the FDA's research there are approximately 106,000 deaths per year attributed to adverse reactions to prescription drugs. One in five hospital visits are the result of a drug reaction. Additionally, adverse drug reactions are estimated to cost our country $135 Billion dollars a year. 

SPARC began by evaluating the FDA's role and mission with laser focus on determining the most simple, yet impactful way to bolster the health and well-being of the largest percentage of the population as feasible. After timely assessment of the possible applications that would align to the FDA's goals, SPARC created user personas to test and validate the pain points, as well as use cases associated with each of the proposed applications. Our application allows consumers to research individual drugs for recalls, label changes or be assured there have been no changes to their medication. Users may also create and monitor a list of drugs you use for possible changes in the future The team used both qualitative and quantitative data in tandem with research of the APIs and datasets to produce an application prototype that will assist users with managing prescription and over the counter drug recall information. 

**ADDRESS THE WHOLE EXPERIENCE FROM START TO FINISH**
With the entirety of the user experience in mind, we wanted to ensure that each user could:

* access the experience from desktop or a modern mobile browser
* see visual information about recalls and the impact of drug changes/recalls on the public
* easily search for a drug name and add it to your list of drugs you take
* search against that list
* see results for recalls of drugs they listed

**_17 g. performed usability tests with people h. used an interactive approach, where feedback informed subsequent work or versions of the prototype_**


### TECHNICAL CONSIDERATIONS 
**MAKE IT SIMPLE AND INTUITIVE**
To achieve a simple and intuitive user experience, SPARC used Bootstrap as a flexible style guide for the application. Responsive design provided accessibility to the application, allowing the user to view the application on a variety of modern mediums. 

used at least three “human-centered design” techniques or tools e. created or used a design style guide and/or a pattern library f. used at least three modern (see Note#2) and open source frontend or client side (see note #3) web technologies

**_c. understand what people need, by including people (see note #1) in the prototype design process_**

**BUILD THE SERVICE USING AGILE AND ITERATIVE PRACTICES**
SPARC incorporated agile principles of frequent delivery and customer engagement for execution. We operated on a daily sprint cadence with daily stand-ups and retrospectives to begin and end each day.  Utilizing a SPARC best practice of a dedicated 'war room' in combination with a one table approach and google chat created synergy and high communication throughout each phase of development. SPARC conducted requirements activities to include user experience interviews, high fidelity wireframing, and collaborative requirements elicitation. User experience designers worked collaboratively with SMEs to ensure that feedback from these discussions were recognized and prioritized. This collaboration created product or feature backlog items and shaped the vision of the OpenFDA application. The first sprint included project infrastructure tasks such as architecture design, creating development environments, establishing continuous integration and deployment processes, and process definition activities. Our team used GitHub as the source code version control system and this repository was shared with each member of the project team. Setting up a continuous integration environment, using Shippable, allowed the team to check in code and immediately see it compiled and deployed to the development environment. This is a risk reduction activity, coupled with local development builds, to eliminate build failures during deployment. 

The SPARC approach emphasized agile development as a set of loosely coupled components with well-defined APIs. SPARC placed a heavy emphasis on automation for operation and maintenance activities, and leveraged tools such as Docker to automate the maintenance of deployments. We used best of breed technologies such as New Relic to provide constant monitoring of the application in production and accelerated problem resolution. SPARC rapidly delivers software using agile processes while maintaining high levels of quality, predictability, and accountability. Our repeatable and proven approach includes project initiation, development, support and maintenance phases.

**AUTOMATE TESTING AND DEPLOYMENTS**
Although there were not team members with dedicated testing roles, the entire team ensured that each sprint ended with a high quality, production-ready deliverable. In addition to standard functional testing activities, SPARC implemented functional testing activities such as unit and integration testing, as well as security, performance, usability, and accessibility testing. Automated testing using Scala Test for Scala, Jasmine for javascript, and Karma for AngularJS.

**CHOSE A MODERN TECHNOLOGY STACK**
Keeping in line with private-sector companies that create similar services, we choose PlayFramework using Scala, AngularJS, Bootstrap and jQuery as our core software framework.  This also allows us to be more stateless, distributed, scalable, responsive and flexible than traditional frameworks.

Further this software can be deployed on a variety of commodity hardware types; e.g., we have provided installation instructions for Yosemite and Debian based systems and have deployed to Amazon Web Services, as well as native MacOSX install and Vagrant installs to Ubuntu Vivid. 

At every layer of the stack, Open Source Software solutions have been explored.  For example, this application uses:

* Development Layer
  * PlayFramework with Scala
  * AngularJS
  * Bootstrap
* Visual Layer
  * Google Fonts
* QA Layer
  * Scala Test
  * Jasmine
  * Karma

### USE DATA TO DRIVE DECISIONS

### DEFAULT TO OPEN

### DEPLOY IN A FLEXIBLE HOSTING ENVIRONMENT
To ensure we our services were deployed to a flexible infrastructure, where resources could be provisioned in real-time, via APIs to meet traffic spikes and user demand, and only pay for what we use, we chose Amazon Web Services.

With this approach resources are provisioned on demand and can scale through multiple regions.  This application is currently set up with 1 region, and multiple availability zones and AWS CloudFront on top of S3 for our Content Delivery Network.

### MANAGE SECURITY AND PRIVACY THROUGH REUSABLE PROCESSES

**_i. created a prototype that works on multiple devices and presents a responsive design j. provided sufficient documentation to install and run their prototype on another machine k. prototype and underlying platforms used to create and run the prototype are openly licensed and free of charge.  _**

**_ d. deployed the prototype on an Infrastructure as a Service (IaaS) or Platform as a Service (PaaS) provider, and indicated which provider was used e. wrote unit tests for their code f. set up or used a continuous integration system to automate the running of tests and continuously deployed their code to their IaaS or PaaS provider g. set up or used configuration management h. set up or used continuous monitoring i. deploy their software in a container (i.e., utilized operating-system-level virtualization) _**


## License
Please see our [license](LICENSE.md) regarding rights and usage for this application.