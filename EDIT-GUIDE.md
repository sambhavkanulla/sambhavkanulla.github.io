# How to edit your site (no coding needed)

You only ever edit TEXT. The site rebuilds itself about a minute after you save.

## The three places you edit

| What you want to change | Open this file on GitHub |
|---|---|
| Headline, 4 numbers, About text, email, resume button | `_data/profile.yml` |
| Your job timeline | `_data/experience.yml` |
| A case study | `_case_studies/<name>.md` |

## To edit a file
1. Go to github.com/sambhavkanulla/sambhavkanulla.github.io
2. Click the file, then click the pencil icon (Edit this file)
3. Change the text between the quotes (or the text of a case study)
4. Click "Commit changes", then "Commit changes" again
5. Wait about 1-2 minutes, then refresh your site

## To add a new case study
1. Open the `_case_studies` folder
2. Click "Add file" > "Create new file"
3. Name it like `my-new-project.md` (lowercase, dashes, ending in .md)
4. Paste the text of an existing case study and change it
5. Change `order:` to control where it appears (1 shows first)
6. `featured: true` shows it on the home page; `false` keeps it on the Case studies page only

## To remove a case study
Open its file, click the three dots at the top right, and choose "Delete file".

## To add your resume PDF
1. In the repo, open the `assets` folder, choose "Add file" > "Upload files", and upload `Sambhav_Kanulla_Resume.pdf`
2. In `_data/profile.yml`, set `resume_file: "/assets/Sambhav_Kanulla_Resume.pdf"`

## Rules that avoid breakage
- Keep the quote marks `"..."` in .yml files. If your text has a quote mark inside, use a single quote `'` instead.
- Keep the three dashes `---` at the top and bottom of the block at the top of case studies.
- Lines starting with `<!-- ADD ... -->` are notes to you. Replace them with real text, then delete the markers.
- If the site stops updating, open the repo's "Actions" tab and look for a red cross. Paste the error message to Claude and I can fix it.
