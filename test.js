function longestCommonPrefix(strs) {
    if (!strs.length) return "";
    let prefix = strs[0];
    // console.log("prefix==", prefix)
    for (let i = 1; i < strs.length; i++) {
        while (!strs[i].startsWith(prefix)) {
            prefix = prefix.slice(0, -1);
            console.log("prefix==", prefix)
            if (!prefix) return "";
        }
    }

    return prefix;
}

// Example usage:
const input = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(input)); // Output: "fl"
