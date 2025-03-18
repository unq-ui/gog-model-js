class Requirement {
  constructor(
    os = [],
    processor = [],
    memory = 0,
    graphics = [],
    directX = "",
    storage = 0
  ) {
    this.os = os;
    this.processor = processor;
    this.memory = memory;
    this.graphics = graphics;
    this.directX = directX;
    this.storage = storage;
  }
}

export default Requirement;