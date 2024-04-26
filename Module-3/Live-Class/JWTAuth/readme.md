# JWT Authentication

> JWT - JavaScript Web Token

JWT is a compact, URL-safe means of representing claims to be transferred between two parties. JWTs are typically used for authentication and authorization.

#### Login/Sign-up

Authentication:

- Who are you?
- Checking whether the user is having an account.

Authorization:

- what access do you have?
- Checking what access the user has.

Encryption:

- Encrypt: Original Password -> Encrypted Password
- Decrypt: Encrypted Password -> Original Password

> **Example**
> Encryption Rule: N + 3
>
> - Original Password : sahil123
> - Encrypted Password : vdklo456
>
> Decryption Rule: N - 3
>
> - Encrypted Password : vdklo456
> - Original Password : sahil123

> bcrypt (Encryption)
> jsonwebtoken (Session)
