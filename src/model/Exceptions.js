class NotFoundUser extends Error {
  constructor() {
    super("User not found");
    this.name = "NotFoundUser";
  }
}

class NotFoundDeveloper extends Error {
  constructor() {
    super("Developer not found");
    this.name = "NotFoundDeveloper";
  }
}

class NotFoundGame extends Error {
  constructor() {
    super("Game not found");
    this.name = "NotFoundGame";
  }
}

class NotFoundTag extends Error {
  constructor() {
    super("Tag not found");
    this.name = "NotFoundTag";
  }
}

class ReviewException extends Error {
  constructor(msg) {
    super(msg);
    this.name = "ReviewException";
  }
}

class UserException extends Error {
  constructor(msg) {
    super(msg);
    this.name = "UserException";
  }
}

class PurchaseException extends Error {
  constructor(msg) {
    super(msg);
    this.name = "PurchaseException";
  }
}

class PageException extends Error {
  constructor(msg) {
    super(msg);
    this.name = "PageException";
  }
}

export {
  NotFoundUser,
  NotFoundDeveloper,
  NotFoundGame,
  NotFoundTag,
  ReviewException,
  UserException,
  PurchaseException,
  PageException
};