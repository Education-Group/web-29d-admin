'use client'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { User } from "lucide-react"
type UserDialogProps = {
  name: string
  email: string
}
export function UserDialog({ name, email }: UserDialogProps) {
  const handleLogout = async () => {
    const response = await fetch('/api/auth/logout', {
      method: 'POST',
    })
    if (response.ok) {
      window.location.reload()
    }
  }
  return (
    <Dialog>
      <form autoComplete="off">
        <DialogTrigger asChild>
          <div className="flex items-center gap-2 cursor-pointer">
            <User size={48} className="rounded-full border-primary border-3 p-2" />
            <span className="text-lg font-medium text-neutral-950">{name}</span>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Name</Label>
              <Input disabled id="name-1" name="name" defaultValue={name} />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Email</Label>
              <Input disabled id="username-1" name="username" defaultValue={email} />
            </div>
          </div>
          <DialogFooter>
            <div className="flex items-center gap-2 justify-between w-full">
              <Button variant="destructive" onClick={handleLogout}>Đăng xuất</Button>
              <div className="flex items-center gap-2">
                <DialogClose asChild>
                  <Button variant="outline">Hủy</Button>
                </DialogClose>
                <Button type="submit">Lưu</Button>
              </div>

            </div>

          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
