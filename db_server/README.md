# Mysql - backend

Just a simple REST API - port 3000
--- 
endpoints:

---
##/create-note
## Type : POST
### input
```json
{
  "note" : "this is a note ...",
  "user": "samuel",
  "color": "blue"
}
```
### output
```json
{
  "status" : "ok"
}
```
---

##/get-notes
## Type : GET

### output
```json
[
    {
        "note": "this is a note ...",
        "user": "samuel",
        "color": "blue"
    },


 ]   

```
 ---
