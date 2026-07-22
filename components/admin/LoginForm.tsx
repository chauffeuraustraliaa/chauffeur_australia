"use client";

import { AlertTriangle, Loader2, Lock, Mail } from "lucide-react";
import { useActionState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginAction, type LoginActionState } from "@/lib/actions/auth-actions";

export function LoginForm() {
  const [state, formAction, pending] = useActionState<LoginActionState, FormData>(
    loginAction,
    null
  );

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="email" className="flex items-center gap-1.5">
          <Mail className="size-3.5 text-brand-gold" aria-hidden />
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="admin@australiataxiservice.com.au"
          required
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="password" className="flex items-center gap-1.5">
          <Lock className="size-3.5 text-brand-gold" aria-hidden />
          Password
        </Label>
        <Input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
        />
      </div>

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 text-muted-foreground">
          <input type="checkbox" name="remember" className="size-3.5 rounded" />
          Remember me
        </label>
        <a href="#" className="font-medium text-brand-navy hover:text-brand-gold-hover">
          Forgot password?
        </a>
      </div>

      {state?.error && (
        <div className="flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive">
          <AlertTriangle className="mt-0.5 size-4 shrink-0" aria-hidden />
          {state.error}
        </div>
      )}

      <Button
        type="submit"
        disabled={pending}
        size="lg"
        className="mt-2 h-11 gap-2 rounded-full bg-brand-gold text-brand-navy-deep hover:bg-brand-gold-hover"
      >
        {pending ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden />
            Signing in...
          </>
        ) : (
          "Login"
        )}
      </Button>
    </form>
  );
}
