# Submission: Matthew Chan

## To run 

1. install dependencies - `yarn install`
2. start project - `yarn start`
3. Run test - `yarn test`

## Live Demo


## Third Party Dependencies
- https://www.npmjs.com/package/axios
- https://www.npmjs.com/package/antd - { Pagination }
- https://www.npmjs.com/package/react-redux
- https://www.npmjs.com/package/redux
---

# Github Repository Search

Build a Github repository search UI, using the following endpoint from the Github API: https://developer.github.com/v3/search/#search-repositories.

The UI should consist of three elements:
- a form for specifying search parameters
- results from the latest search
- pagination links for navigating to a different section of the results

There are visual mocks for desktop and mobile versions of the UI in assets.zip. The UI should be responsive, and should match these mocks as closely as possible. The mocks reference an image which can also be found in assets.zip.

You can use any library or framework with the exception of Github SDKs or API clients (i.e., the code should construct HTTP requests directly). Your application should not include a server component.

## Details

### Form

The form should include the following fields:

- **Text** - a text box for full-text search queries, maps to the `q` query parameter
- **Stars** - a text box that maps to the `stars` qualifier and supports the syntax specified [here](https://help.github.com/articles/searching-repositories/#search-based-on-the-number-of-stars-a-repository-has). If the syntax of the text is invalid upon blur, an inline error message should be displayed.
- **License** - a dropdown that maps to the `license` qualifier, and includes the MIT, ISC, Apache and GPL license types (using details listed [here](https://help.github.com/articles/licensing-a-repository/#searching-github-by-license-type))
- **Include Forked** - a checkbox that sets the `fork` qualifier to "true"

A search should only be initiated when the user submits the form.

### Results

Each result should include the following data:

- Repo name
- Repo owner's name
- URL to the repo
- Description
- Number of stars
- License
- Whether or not the repo is forked

While results are loading from the API, all buttons and links in the UI should be disabled, and a loading indicator should be displayed. If a search returns no results, that should be explicitly indicated in the results section.

### Pagination

Below the search results, display pagination links with the following properties:
- always includes links to the first page, last page and current page (which should be visually differentiated)
- also includes links to two "context" pages before and after the current page
- indicates any gaps between the context pages and the first or last pages via a '...'
- displays each page at most once
- does not display any pages that will not include results

Examples:
- 1 ... 10 11 **12** 13 14 ... 42
- 1 **2** 3 4 ... 42
- 1 ... 40 41 **42**

When a user clicks on a pagination link, the appropriate page of results should be loaded.

### Query Parameters

The UI should support setting form fields and the current page via query parameters. Also, whenever the user searches or clicks a pagination link, the URL should be updated with the appropriate query parameters.
