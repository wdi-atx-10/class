## Homework Submission Process

1. Open the homework repository in your browser. This link will be sent via slack at the end of each day.

2. Click the "Fork" button to fork the homework repository.

3. Now you should see **your forked copy** of the homework repo in the browser. Click the "Clone or download" button and copy the SSH link.

4. In Terminal, `cd` into your `homework` directory and run `git clone <LINK>`, where `<LINK>` is the SSH link that you've just copied.

5. `cd` into the cloned homework repository.

6. Create a new branch to complete the homework. `git checkout -b new_branch_name`

7. Open your code in atom and complete the homework.

8. Track and stage your files with `git add .` then `git commit -m "Message goes here"`. Finally push to your forked copy on Github with `git push origin new_branch_name`.

8. Go back to your forked copy on Github. Click the "New pull request" button to create a new pull request from your new_branch_name into the main repository from GA.

10. Create the pull request to submit your homework.

For example, the sequence of commands you might follow to complete the above process is:

```
# Click grey 'Fork' button on Github
js1989: ~/wdi $ git clone git@github.com:js1989/homeworkaroo.git
js1989: ~/wdi/homeworkaroo $ cd homeworkaroo
js1989: ~/wdi/homeworkaroo $ git checkout -b homework_branch
js1989: ~/wdi/homeworkaroo (johnsmith_solution *) $ git add .
js1989: ~/wdi/homeworkaroo (johnsmith_solution +) $ git commit -m "Homework complete"
js1989: ~/wdi/homeworkaroo (johnsmith_solution) $ git push origin homework_branch
# Click green 'New pull request' button on Github
# Click green 'Create pull request' button
# Click the new 'Create pull request' button
```

### If you have errors...

...please refer to [this readme](http://ga-wdi-lessons.github.io/git-review/) for instructions on common Git errors.
