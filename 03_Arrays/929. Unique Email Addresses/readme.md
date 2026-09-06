# LeetCode Solution: Unique Email Addresses

## Problem  
📋 **929. Unique Email Addresses**  
Check out the problem description on LeetCode:  
👉 https://leetcode.com/problems/unique-email-addresses/description/?envType=problem-list-v2&envId=array

## My Solution  
💡 **Detailed explanation with examples**  
Read my complete solution on LeetCode:  
👉 https://leetcode.com/problems/unique-email-addresses/solutions/7442746/very-simple-sol-with-logic-explaination-y2tvt/

## Quick Overview
- **Problem Type**: String, Hash Set  
- **Difficulty**: Easy  
- **Key Concept**: Email normalization  
- **Solution Summary**:  
  For each email:
  - Split into **local name** and **domain** by `'@'`.  
  - In the local name:
    - Ignore all characters after `'+'`.  
    - Remove all `'.'` characters.  
  - Recombine cleaned local name with the domain.  
  Add to a set and return the size of the set for unique addresses.

---

## 👨‍💻 Author

**Vishal Yadav**

> 📧 **Email:** [vishalyadavy0022@gmail.com](mailto:vishalyadavy0022@gmail.com)  
> 💼 **Portfolio:** [GitHub Profile](https://github.com/vishal-ydv17)  
> 🔗 **LinkedIn:** [linkedin.com/in/vishal-ydv17](https://linkedin.com/in/vishal-ydv17)  
> 🐦 **Twitter:** [x.com/vishal_ydv17](https://x.com/vishal_ydv17)
