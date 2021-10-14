const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
    // this.root = null;
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    return this.treeRoot;
  }

  add(val) {
    // throw new NotImplementedError('Not implemented');
    // if (this.treeRoot == null) {
    //   this.treeRoot = val;
    // }
    
    this.treeRoot = addIn(this.treeRoot, val);

    function addIn(node, val) {
      if (!node) {
        return new Node(val);
      }

      if (node.data === val) {
        return node;
      }

      if (val < node.data) {
        node.left = addIn(node.left, val);
      }else {
        node.right = addIn(node.right, val);
      }

      return node;
    }
  }

  has(val) {
    // throw new NotImplementedError('Not implemented');
    return searchIn(this.treeRoot, val);

    function searchIn(node, val) {
      if (!node) {
        return false;
      }

      if (node.data === val) {
        return true;
      }

      return val < node.data ? 
        searchIn(node.left, val) : 
        searchIn(node.right, val);
    }
  }

  find(val) {
    // throw new NotImplementedError('Not implemented');
    return searchIn(this.treeRoot, val);

    function searchIn(node, val) {
      if (!node) {
        return null;
      }

      if (node.data === val) {
        return node;
      }

      return val < node.data ? 
        searchIn(node.left, val) : 
        searchIn(node.right, val);
    }
  }

  remove(val) {
    // throw new NotImplementedError('Not implemented');
    this.treeRoot = removeItem(this.treeRoot, val);

    function removeItem(node, val) {
      if (!node) {
        return null;
      }

      if (val < node.data) {
        node.left = removeItem(node.left, val);
        return node;
      } else if (node.data < val) {
        node.right = removeItem(node.right, val);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeItem(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min(val) {
    // throw new NotImplementedError('Not implemented');
    if (!this.treeRoot) {
      return;
    }

    let node = this.treeRoot;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    if (!this.treeRoot) {
      return;
    }

    let node = this.treeRoot;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }

}