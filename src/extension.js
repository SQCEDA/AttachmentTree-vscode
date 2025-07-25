
const extensionLayerStack = require('./extensionLayerStack')
const extensionAttachmentTree = require('./extensionAttachmentTree')

function activate(context) {

  extensionAttachmentTree.activate(context)
  extensionLayerStack.activate(context)

}
exports.activate = activate;
