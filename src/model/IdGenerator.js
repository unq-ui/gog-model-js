class IdGenerator {
  constructor() {
    this.currentUserId = -1;
    this.currentReviewId = -1;
  }

  nextUserId() {
    return `u_${++this.currentUserId}`;
  }

  nextReviewId() {
    return `r_${++this.currentReviewId}`;
  }
}

export default IdGenerator;