class GithubView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;
      
      this.client.getRepoInfo(repoName, repoData => {
        console.log(repoData);
        this.display(repoData);
      });

    });
  }

  display(repoData) {
    document.querySelector('#repo-name').innerHTML = '';
    document.querySelector('#repo-description').innerHTML = '';
    if(document.querySelector('img') != null) {
      document.querySelector('img').remove()
    }
    document.querySelector('#repo-name').append(repoData.full_name);
    document.querySelector('#repo-description').append(repoData.description);
    const image = document.createElement('img');
    image.id = 'repo-image';
    image.src = repoData.organization.avatar_url;
    document.querySelector('div').append(image);

  }
}

module.exports = GithubView;