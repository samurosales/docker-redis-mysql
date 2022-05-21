# Redis - backend

Just a simple REST API - port 4000
--- 
endpoints:

---
## /set-user
## Type : POST
### input
```json
{
  "user" : "a user name"
}
```
### output
```json
{
  "status" : "ok"
}
```
---

##/get-user
## Type : GET

### output
```json
{
  "user" : "a user name"
}
```
 ---
##/logout
## Type : GET

### output
```json
{
  "status" : "ok"
}
```
 ---
