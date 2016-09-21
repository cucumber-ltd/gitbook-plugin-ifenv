module.exports = {
  blocks: {
    ifenv: {
      process: function(block) {
        const envVar = block.kwargs.env
        if (process.env[envVar]) {
          console.log(block.body)
          return this.book.renderBlock('markdown', block.body)
        } else {
          return ""
        }
      }
    }
  }
}
