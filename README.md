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

## Concept Questions:
### Q1. What is a branch, and why is the use of feature branches recommended?<br>
**Answer:** A Git Branch is a:
+ A separate line of development created off of the main code base (generally main or master).
+ An isolated workspace to allow developers to work on a branch without touching the stable production code.
+ Each feature — or bug fix — is developed on a separate branch, preventing changes from breaking the main application.
+ Developers merge the feature branch only when the work is finished and reviewed — keeping main clean and production-ready.
+ Multiple developers can work at once on separate branches without causing conflicts.

### Q2. What is the primary role of a Pull Request in a modern deployment workflow?
**Answer:** A Pull Request (PR) is mainly used to propose and review code before merging it into the main branch. It allows team members to check the code, give feedback, and make sure nothing breaks the existing system. In most companies, PR also triggers automated tests through CI/CD, so we know the code is safe. It helps in collaboration, avoids mistakes going to production, and keeps a clear record of what changes were made and why. So basically, it’s a safe approval step before final deployment.

### Q3. How can you automate deploys to Vercel directly from GitHub (outline the basic steps)?
**Answer:** You can automate deploys to Vercel from GitHub very easily by connecting the repo. The Basic steps are as follow:
+  Push your project to GitHub.
+  Go to Vercel and click "New Project."
+  Select your GitHub repository and import it.
+  Vercel will auto-detect framework (Next.js, React, etc.). If not then select the folder where you have the main code files.
+  Setup the Build Commands or Install Command (if any)
+  Setup the environment variables
+  Just confirm settings and click Deploy.
+  After that, every git push to main or selected branch auto-deploys to Vercel.

### Q4. Explain the purpose of different "environment" types (e.g., Development, Staging, Production) in deployment.
**Answer:** Different environments are utilized to logically separate stages of development and to ensure safety prior to going live: 
+ **Development Environment**: Used  by developers to construct and test new features. All the bugs encountered here are resolved.
+ **Staging Environment**: This is very similar to production. This is the last testing to take place before that release is deployed. It is also used to validate all scenarios, integration and performance in a live-like environment.
+ **Production Environment**: This is the live version used by real users to perform real tasks. Only tested and approved code from staging is again deployed to production.

### Q5. How do you set and securely use environment variables in platforms like Vercel or GitHub Actions?
**Answer:** 
**Vercel Setup**:
In Vercel → Go to Project Settings → Environment Variables → add variables like API_KEY, DB_URL under Development / Preview / Production.
You can access them in code using process.env.API_KEY.

**Github Action:**
In GitHub Actions → Go to Repo Settings → Secrets and Variables → Actions → New Secret.
Then in workflow file, use like:
env: API_KEY: ${{ secrets.API_KEY }}

### Q6. When and why should you use a protected branch or a required approval rule before deploying to production?
**Answer:** You should use a protected branch or required approval rule when you want to avoid accidental or unsafe code going into production.
+ It blocks direct push to the main or production branch.
+ Forces every change to go through a Pull Request + code review.
+ It make sure at least one team leader or designated member approves before merge.
+ Prevents mistakes, broken features, or half-done work from reaching real users.
+ Adds accountability, as you always know who approved what.

---
### END OF REPO
