module.exports = {
  "run": [{
    "method": "local.set",
    "params": {
      "name": "{{input.name}}"
    }
  }, {
    "method": "modal",
    "params": {
      "title": "Ollama",
      "description": "Launch Ollama before proceeding.",
      "menu": [{
        "text": "Install Ollama",
        "href": "https://ollama.com/"
      }]
    }
  }, {
    "method": "shell.run",
    "params": {
      "message": "ollama pull {{local.name}}"
    }
  }, {
    "method": "input",
    "params": { "title": "Download Finished", "description": "Go back to the dashboard and launch the app!" }
  }]
}
