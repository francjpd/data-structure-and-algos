class Codec:
    def serialize(self, root):
        result = []

        def dfs(node):
            if not node:
                result.append("None")
                return
            result.append(str(node.val) + ", ")
            dfs(node.left)
            dfs(node.right)
            return

        dfs(root)

        return join(result)

    def deserialize(self, data):
        values = data.split(",")

        def dfs():
            if not values:
                return None
            value = values.pop(0)
            if value == "None":
                return None
            node = TreeNode(int(value))
            node.left = dfs()
            node.right = dfs()
            return node

        return dfs()
