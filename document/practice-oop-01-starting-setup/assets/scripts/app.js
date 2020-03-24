class Tooltip {}

class ProjectItem {}

class ProjectList {
  constructor(type) {
    const prjList = document.querySelectorAll(`#${type}-projects li`);
    console.log(prjList);
  }
}

class App {
  static init() {
    const listProjActice = new ProjectList("active");
    const listProjFinished = new ProjectList("finished");
  }
}

App.init();
