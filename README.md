TEDSIG | Speculative Library Futures
====================================
Project Site

### Setup

1. ```git clone``` the [repo](https://github.com/dzoladz/tedsig-futures.git) from GitHub
2. cd to repo root and ```git pull```
3. ```bundle install```
4. Continue with step 3 below

### Contributing

1. Make sure you're on the master branch
  * ```git checkout master```
2. Make sure your master branch is up to date
  * ```git pull origin master```
3. Start up jekyll
  * ```bundle exec jekyll serve```
  * open [http://localhost:4000](http://localhost:4000) in your browser
4. Create a new branch for your changes
  * ```git checkout -b issue#3```
5. Make changes, check [http://localhost:4000](http://localhost:4000) to see your changes live
6. Add your changed files
  * ```git add {changed-files}```
7. Commit your changes with a fancy message
  * ```git commit -m "fixes issue #3"```
8. Add your branch to the repo
  * ```git push --set-upstream origin issue#3```
9. Switch back to the master branch
  * ```git checkout master```
10. Go to https://github.com/dzoladz/tedsig-futures.git
11. Make a pull request base:master and compare:issue-3
12. Wait for someone to test your changes and merge the pull request
13. Do the dance of joy 🎉

### Managing Pull Requests

1. Follow steps 1 - 3 above
2. Get any remote branches
  * ```git fetch```
3. Switch to the branch in question
  * ```git checkout BRANCHNAME```
4. ```bundle exec jekyll serve```
5. Check [http://localhost:4000](http://localhost:4000) that nothing is broken
6. Merge that branch into master (easiest to manage on the GitHub site)
