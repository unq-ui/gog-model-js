class User {
  constructor(id, email, password, name, image, backgroundImage, games = [], friends = []) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.name = name;
    this.image = image;
    this.backgroundImage = backgroundImage;
    this.games = games;
    this.friends = friends;
  }
}

export default User;