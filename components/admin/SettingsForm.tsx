"use client";

import { useState, useTransition } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

import {
  updateAdminPassword,
  updateAdminProfile,
  updateCompanySettings,
} from "@/lib/actions/settings-actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const currencies = ["AUD", "USD", "EUR", "GBP", "NZD"];
const timezones = [
  "Australia/Sydney",
  "Australia/Melbourne",
  "Australia/Brisbane",
  "Australia/Perth",
  "Australia/Adelaide",
];

export function SettingsForm({
  admin,
  settings,
}: {
  admin: { name: string; email: string };
  settings: {
    companyName: string;
    supportEmail: string;
    logoUrl: string | null;
    currency: string;
    timezone: string;
  };
}) {
  const [isPending, startTransition] = useTransition();

  const [name, setName] = useState(admin.name);
  const [email, setEmail] = useState(admin.email);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [companyName, setCompanyName] = useState(settings.companyName);
  const [supportEmail, setSupportEmail] = useState(settings.supportEmail);
  const [logoUrl, setLogoUrl] = useState(settings.logoUrl ?? "");
  const [currency, setCurrency] = useState(settings.currency);
  const [timezone, setTimezone] = useState(settings.timezone);

  function handleProfileSave() {
    startTransition(async () => {
      try {
        await updateAdminProfile({ name, email });
        toast.success("Profile updated");
      } catch (error) {
        toast.error(error instanceof Error ? error.message : "Failed to update profile");
      }
    });
  }

  function handlePasswordSave() {
    startTransition(async () => {
      try {
        await updateAdminPassword({ currentPassword, newPassword, confirmPassword });
        toast.success("Password updated");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } catch (error) {
        toast.error(error instanceof Error ? error.message : "Failed to update password");
      }
    });
  }

  function handleCompanySave() {
    startTransition(async () => {
      try {
        await updateCompanySettings({ companyName, supportEmail, logoUrl, currency, timezone });
        toast.success("Company settings updated");
      } catch (error) {
        toast.error(error instanceof Error ? error.message : "Failed to update settings");
      }
    });
  }

  return (
    <Tabs defaultValue="profile">
      <TabsList>
        <TabsTrigger value="profile">Admin Profile</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="company">Company</TabsTrigger>
      </TabsList>

      <TabsContent value="profile">
        <Card>
          <CardHeader>
            <CardTitle>Admin Profile</CardTitle>
            <CardDescription>Your name and email used to sign in.</CardDescription>
          </CardHeader>
          <CardContent className="flex max-w-md flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="admin-name">Name</Label>
              <Input id="admin-name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="admin-email">Email</Label>
              <Input
                id="admin-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Button className="self-start" disabled={isPending} onClick={handleProfileSave}>
              {isPending && <Loader2 className="size-4 animate-spin" />}
              Save Profile
            </Button>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Change Password</CardTitle>
            <CardDescription>Update the password used to access the admin panel.</CardDescription>
          </CardHeader>
          <CardContent className="flex max-w-md flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="current-password">Current Password</Label>
              <Input
                id="current-password"
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="new-password">New Password</Label>
              <Input
                id="new-password"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <Input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <Button
              className="self-start"
              disabled={isPending || !currentPassword || !newPassword}
              onClick={handlePasswordSave}
            >
              {isPending && <Loader2 className="size-4 animate-spin" />}
              Update Password
            </Button>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="company">
        <Card>
          <CardHeader>
            <CardTitle>Company Information</CardTitle>
            <CardDescription>
              Shown on customer-facing quotes and used as the default support contact.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex max-w-md flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="company-name">Company Name</Label>
              <Input
                id="company-name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="support-email">Support Email</Label>
              <Input
                id="support-email"
                type="email"
                value={supportEmail}
                onChange={(e) => setSupportEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="logo-url">Logo URL</Label>
              <Input
                id="logo-url"
                placeholder="https://..."
                value={logoUrl}
                onChange={(e) => setLogoUrl(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                Paste a hosted image URL. File upload requires connecting a storage provider
                (e.g. Supabase Storage), which isn&apos;t wired up yet.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="currency">Currency</Label>
                <Select value={currency} onValueChange={(value) => value && setCurrency(value)}>
                  <SelectTrigger id="currency" className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {currencies.map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="timezone">Timezone</Label>
                <Select value={timezone} onValueChange={(value) => value && setTimezone(value)}>
                  <SelectTrigger id="timezone" className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {timezones.map((tz) => (
                      <SelectItem key={tz} value={tz}>
                        {tz}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button className="self-start" disabled={isPending} onClick={handleCompanySave}>
              {isPending && <Loader2 className="size-4 animate-spin" />}
              Save Company Settings
            </Button>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
