const LinksSocialMedia = {
  github: 'CarlaRochaBovi',
  youtube: 'UCLEdg0pGSKVQj21Fo-uTtwQ',
  facebook: 'profile.php?id=100009933967669',
  instagram: 'carla_rocha_bovi',
  twitter: 'jakelinytec'
}

function chanceSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

chanceSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
