# Smarter Grocery List Capstone 2 Project
Smarter grocery list that gives an optimal path through the store and compares prices for you!

## Contributing
In order to contribute, first get the project running locally. You will need Git installed. Open Git Bash and navigate to the directory you would like to store the project using `ls` and `cd`. Then, clone the repository using the following command:
> git clone https://github.com/reidhaegele/GroceryList.git

Open the project:
> cd GroceryList/

If done correctly, the directory you are in should have "(main)" after it. That means you are in a local git repository on the "main" branch. You can verify this by running `git status`.
Now open the code in your IDE of choice. For visual studio, simply run the following command in the GroceryList directory:
> code .

The following steps will work in VSCODE terminal (open with Terminal->New Terminal OR keyboard shortcut ctrl + shit + `):
Ensure all packages/dependencies are installed by running the following command:
> npm i

Ensure web capability by running the following command:
> npx expo install react-native-web react-dom @expo/metro-runtime

To run the app, run the following command:
> npx expo start

You should see a QR code in the terminal along with the following line:
> Web is waiting on http://localhost:8081

Download the Expo Go app on your phone and use your phone's camera to scan the QR code. Additionally, you can ctrl + click on the localhost link (or just copy paste) to view in your browser.

### Issues, Branching, and Pull Requests
Now that you have the development environment set up, it is time to start tackling issues. Our issue tracking structure for the project is as follows:
A new feature, bug, or refactoring is seen to be necessary by the team. First, we should create an issue on the [project board](https://github.com/users/reidhaegele/projects/2). Large features/bugs/refactors should be broken down into multiple issues. For example, if we decide to create a List page and an Account page, we should create two separate issues. Do not create one issue called "Create Pages". 

To tackle an issue from the project board, first create a new local branch for that issue. Before creating a new branch, it is a good idea to `git pull` and `git fetch` to ensure your local repo is up to date with the remote repo. Also, always create a new branch from the "main" branch rather than from another branch.

You should notice that the issues on the project board are numbered. We will use these numbers as our branch naming convention. Below is an example on how to work on [issue #10](https://github.com/reidhaegele/GroceryList/issues/10)
Create and switch to a new branch with the following command:
> git checkout -b issues/10

Now you can begin coding to resolve the issue. You should now move the issue to the "In Progress" section of the Kanban Board. Remember, to push your changes, first do `git status` and see what you have modified. Then, either use `git add .` to add all modified files for staging or `git add filename.ext` to only add certain files. Files such as package-lock.json and package.json should NOT be included in commits. Then, use `git commit -m "commit message"` to create the commit. Finally, use the following command to push it to the remote repository:
> git push --set-upstream origin issues/10

Once you have pushed your changes to the remote branch, it is now time to complete a pull request. Navigate to the [remote repo](https://github.com/reidhaegele/GroceryList). Hit "Pull Requests". Hit the green "New Pull Request" button. Select the branch you were working on to compare. Make sure your changes look correct. Hit the green "Create Pull Request" button. The title by default is the branch name. Feel free to name it whatever you like. A template should appear with before and after sections. At the top, change the "[number]" to the issue number to link it to the project board issue. In the before section, explain what the projects behavior was before this branch was created. In the after section, explain the behavior of the project in this new branch. Finally, hit the green "Create Pull Request" button. Move the issue to the "In Review" section of the Kanban board.

Congratulations, you have now contributed to the project. Once the branch has been merged in, you can move the issue to the "Done" section of the Kanban board.

### Backend
The backend uses django framework. We are going to be using restframework for user authentication and corsheaders for domain authentication. Corsheaders will ensure that we only accept requests from ceartain domain names so tons of extra requests won't be sent to the backend api. 

### Installing Django
You will need to install Django
> pip install django

Then you can install rest framework 
> pip install djangorestframework

Finally install corsheaders
> pip install django-cors-headers

### Running Server
To run the server you will cd into the Django backend file and then use the command:
> python3 mangage.py runserver
* This will run the server on localhost port 8000

### Making changes to database
After editing the model folder you need to run two commands to make sure the database is updated:
> python3 manage.py makemigrations
then 
> python3 manage.py migrate


