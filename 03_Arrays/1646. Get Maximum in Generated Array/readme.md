# LeetCode Solution: Get Maximum in Generated Array

## Problem  
📋 **1646. Get Maximum in Generated Array**  
Check out the problem description on LeetCode:  
👉 https://leetcode.com/problems/get-maximum-in-generated-array/description/

## My Solution  
💡 **Detailed explanation with examples**  
Read my complete solution on LeetCode:  
👉 https://leetcode.com/problems/get-maximum-in-generated-array/solutions/7521415/very-simple-sol-with-logic-explaination-471do/

## Quick Overview
- **Problem Type**: Array, Dynamic Programming  
- **Difficulty**: Easy  
- **Key Concept**: Generate using given relations  
- **Solution Summary**:  
  Generate the array according to the rules:  
  - `nums[0] = 0`, `nums[1] = 1`  
  - For even `2*i`: `nums[2*i] = nums[i]`  
  - For odd `2*i + 1`: `nums[2*i+1] = nums[i] + nums[i+1]`  
  Track and return the **maximum value** generated.

---

## 👨‍💻 Author

**Vishal Yadav**

> 📧 **Email:** [vishalyadavy0022@gmail.com](mailto:vishalyadavy0022@gmail.com)  
> 💼 **Portfolio:** [GitHub Profile](https://github.com/vishal-ydv17)  
> 🔗 **LinkedIn:** [linkedin.com/in/vishal-ydv17](https://linkedin.com/in/vishal-ydv17)  
> 🐦 **Twitter:** [x.com/vishal_ydv17](https://x.com/vishal-ydv17)
