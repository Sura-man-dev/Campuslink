# CampusLink backend

The backend is a Spring Boot 4 REST API using Java 21. It provides student registration and login, BCrypt password hashing, and eight-hour signed bearer tokens. Flyway creates the account table when the application starts.

## Requirements

- JDK 21
- Neon PostgreSQL connection details for persistent storage
- A 32-character-or-longer JWT signing secret

## Run locally

From the repository root:

```bash
cd backend
export JWT_SECRET="$(openssl rand -hex 32)"
./mvnw spring-boot:run -Dspring-boot.run.profiles=local
```

The `local` profile uses an in-memory H2 database. Its data is erased when the backend stops. The API listens on `http://localhost:8080`.

## Connect Neon PostgreSQL

1. In Neon, copy the connection details for the database and branch you want to use.
2. Copy `.env.example` to `.env`. Set `DATABASE_URL` to a JDBC URL in the form `jdbc:postgresql://<neon-host>/neondb?sslmode=require`, and set the matching `DATABASE_USERNAME` and `DATABASE_PASSWORD`. Neon connection strings with a pooler hostname can also be used.
3. Keep `.env` private; it is ignored by Git. Never put database credentials, a Neon API key, or `JWT_SECRET` in frontend files or commit them.
4. Create a fresh `JWT_SECRET` containing at least 32 characters. For local development, the `openssl` command above generates one.
5. Load the environment and start Spring Boot:

```bash
cd backend
set -a
. ./.env
set +a
./mvnw spring-boot:run
```

The API connects to Neon using `DATABASE_URL`, `DATABASE_USERNAME`, and `DATABASE_PASSWORD`. Flyway creates the `campus_users` table on first startup.

Do not activate the `local` profile when connecting Neon or deploying. For production, configure environment variables in the deployment platform, use a unique secret, and set `CORS_ALLOWED_ORIGINS` to the exact frontend origin.

## API

- `POST /api/auth/register` — JSON: `{"username":"student1","email":"student@example.edu","password":"at-least-8-characters"}`
- `POST /api/auth/login` — JSON: `{"email":"student@example.edu","password":"at-least-8-characters"}`
- `GET /api/auth/me` — requires `Authorization: Bearer <token>`

Registration currently accepts any syntactically valid email address. Email ownership verification and institution-specific domain restrictions can be added when those requirements are known.

The frontend uses `http://localhost:8080` by default. Override it at frontend build time with `VITE_API_BASE_URL` if the API runs elsewhere.

## Verify

```bash
./mvnw test
```

The tests use an isolated in-memory H2 database and do not require Neon credentials.
