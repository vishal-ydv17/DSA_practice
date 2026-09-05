```md
# LeetCode Solution: Binary Prefix Divisible By 5

## Problem  
📋 **1018. Binary Prefix Divisible By 5**  
Check out the problem description on LeetCode:  
👉 https://leetcode.com/problems/binary-prefix-divisible-by-5/description/

## My Solution  
💡 **Detailed explanation with examples**  
Read my complete solution on LeetCode:  
👉 https://leetcode.com/problems/binary-prefix-divisible-by-5/solutions/7460929/very-simple-sol-with-logic-explaiantion-xua8p/

## Quick Overview
- **Problem Type**: Array, Math  
- **Difficulty**: Easy  
- **Key Concept**: Running remainder  
- **Solution Summary**:  
  Track the prefix value modulo 5 as you scan the binary array.  
  For each bit:
  - Update `current = (current * 2 + bit) % 5`.
  - Append `true` if divisible by 5 (`current == 0`), else `false`.

---

## 👨‍💻 Author

**Vishal Yadav**

> 📧 **Email:** [vishalyadavy0022@gmail.com](mailto:vishalyadavy0022@gmail.com)  
> 💼 **Portfolio:** [GitHub Profile](https://github.com/vishal-ydv17)  
> 🔗 **LinkedIn:** [linkedin.com/in/vishal-ydv17](https://linkedin.com/in/vishal-ydv17)  
> 🐦 **Twitter:** [x.com/vishal_ydv17](https://x.com/vishal-ydv17)
```
