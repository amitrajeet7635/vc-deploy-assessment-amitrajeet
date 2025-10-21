# vc-deploy-assessment-amitrajeet
**Name** : Amitrajeet Konch<br>
**What does version control mean to you?**\
Version control is a management system, that tracks down all the instances occuring on files over a period of time in Github. It has many verticals, and combining each one gives us the smooth management for any project. Version control helps to manage large projects as you can create different branches, create commits and can see all the previous commit history. It enables team collaboration in a very efficient manner.

### Some of the Key Features of Version Control are listed below:
+ Branching and Merging
+ Rollbacks and Reverts
+ Collaboration
+ Track Changes in Files

### My Github/Vercel Usernames:
+ Github: amitrajeet7635
+ Vercel: amitrajeet7635

### Todo App Live Link: https://vc-deploy-assessment-amitrajeet.vercel.app/

---

### How you would utilize different Vercel deployment environments ("Preview," "Production")?
Vercel has two different environments for deploying a project.
+ Preview Environment 
+ Production Environment

**Preview Environment**: As this triggers the deployment automatically as soon as I push the code in the non-main branch (ex. feature branch) and it provide a testing website. This could be helpful as I need to test some on my features with the deployment parameters. It is important as it enables an option to check every feature and functionality before going live on the main branch.

**Production Environment**: This is used for the final deployment that will be public, after passing all the test cases we use the production environment to deploy the final and main version of the application.

---

### How environment variables change between these stages?
+ For the Preview Environment we use test or staging values which prevents messing with the real data while testing. Ex: API_URL=https://test-api.live.com
+ For the Production Environment we use real values as we need to connect our application with the live services. Ex: API_URL=https://api.live.com

### Which branch would typically trigger a production deployment, and why?<br>
The **main** branch will trigger the production deployment as all the sub features and being development in separate branches and then we merge it to the main branch after all the testing. Thus the main branch has the proper working version of the application, hence it will typically trigger for a production deployment.

---

### How does a protected branch (or required approval rule) improve deployment safety?
A protected branch (usually the main or production branch) is a branch that can’t be changed directly unless certain rules are followed.
+ Code review required before merging.
+ Passing tests (CI/CD checks) required.
+ Only specific people can approve or merge changes.

These type of rules are checked so that no one can accidentally pushes a wrong codebase into the production branch. Reviewing ensures that someone is manually reviewing the changes and then pushing it to the main branch. Setting up CI/CD pipelines help us to to identifying any major bug by passing the whole codebase through automated tests (like unit tests, linting, etc.) before it can be merged.

---


