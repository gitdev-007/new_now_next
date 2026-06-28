/* ============================================================================
 * LayoverX Auth controller
 * Front-end only: persists a lightweight user record in localStorage.
 * Designed so the storage layer can be swapped for Supabase/Firebase later.
 * ========================================================================== */

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

const STORAGE_KEY = "layoverx.user";
const SUBSCRIBERS = new Set<(u: AuthUser | null) => void>();

function read(): AuthUser | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as AuthUser) : null;
  } catch {
    return null;
  }
}

function write(user: AuthUser | null): void {
  try {
    if (user) localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    else localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore quota errors */
  }
  SUBSCRIBERS.forEach((cb) => cb(user));
}

function buildUser(email: string, name?: string): AuthUser {
  const fallbackName = email.split("@")[0] ?? "Traveler";
  return {
    id: `usr_${crypto.randomUUID().slice(0, 12)}`,
    email,
    name: name?.trim() || fallbackName,
  };
}

export const auth = {
  current(): AuthUser | null {
    return read();
  },

  subscribe(cb: (u: AuthUser | null) => void): () => void {
    SUBSCRIBERS.add(cb);
    cb(read());
    return () => SUBSCRIBERS.delete(cb);
  },

  async login(email: string, _password: string): Promise<AuthUser> {
    await new Promise((r) => setTimeout(r, 250));
    const user = buildUser(email);
    write(user);
    return user;
  },

  async signup(name: string, email: string, _password: string): Promise<AuthUser> {
    await new Promise((r) => setTimeout(r, 250));
    const user = buildUser(email, name);
    write(user);
    return user;
  },

  async requestPasswordReset(email: string): Promise<void> {
    await new Promise((r) => setTimeout(r, 200));
    // In production this hits the auth backend; here we just simulate latency.
    void email;
  },

  async socialLogin(_provider: string): Promise<AuthUser> {
    await new Promise((r) => setTimeout(r, 300));
    const user: AuthUser = {
      id: `usr_${crypto.randomUUID().slice(0, 12)}`,
      email: "google.user@example.com",
      name: "Google User",
    };
    write(user);
    return user;
  },

  logout(): void {
    write(null);
  },
};