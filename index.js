module.exports = {
  blocks: {
    ifenv: {
      process: function(block) {
        const envVar = block.kwargs.env
        if (process.env[envVar]) {
          if (block.body.split("\n").length == 1)
            return this.book.renderInline('markdown', block.body)
          else
            return this.book.renderBlock('markdown', block.body)
        } else {
          return ""
        }
      }
    }
  }
}
