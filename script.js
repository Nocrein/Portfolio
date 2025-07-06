document.addEventListener('DOMContentLoaded', () => {
  const btnProjects = document.getElementById('btn-projects');
  const btnContact = document.getElementById('btn-contact');

  btnProjects.addEventListener('click', () => {
    location.href = '#projects';
  });

  btnContact.addEventListener('click', () => {
    location.href = '#contact';
  });
});
 