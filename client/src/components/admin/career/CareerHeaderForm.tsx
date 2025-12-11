"use client";
import { useState, useEffect } from 'react'
import { Settings, Plus } from 'lucide-react'
import { AdminTable, type Column, } from '@/components/admin/AdminTable'

import { toast } from 'sonner'
import type { CareersMeta } from '@/types/types'
import { useCareersMeta, useUpsertCareersMeta } from '@/hooks/main/useCareers'


export default function AdHeaderForm() {
  const { data: meta } = useCareersMeta()
  const { mutateAsync: saveMeta, isPending } = useUpsertCareersMeta()
  const [showForm, setShowForm] = useState(false)
  const [draft, setDraft] = useState({
    heroTitle: 'Join Our Team',
    heroSubtitle: "Help us revolutionize how companies hire engineering talent. We're looking for passionate individuals who want to make a real impact.",
    footerTitle: 'Open Positions',
    footerSubtitle: 'Find your next career opportunity with us',
  })

  useEffect(() => {
    if (meta) {
      setDraft({
        heroTitle: meta.heroTitle,
        heroSubtitle: meta.heroSubtitle,
        footerTitle: meta.footerTitle,
        footerSubtitle: meta.footerSubtitle,
      })
    }
  }, [meta])

 type HeaderRow = CareersMeta;
  const headerCols: Column<HeaderRow>[] = [
    { header: 'Hero Title', accessor: 'heroTitle', className: 'w-[180px] truncate' },
    { header: 'Hero Subtitle', accessor: 'heroSubtitle', className: 'w-[300px] truncate' },
    { header: 'Footer Title', accessor: 'footerTitle', className: 'w-[180px]' },
    { header: 'Footer Subtitle', accessor: 'footerSubtitle', className: 'w-[300px] truncate' },
  ]

  return (
    <div className="card mb-8">
      <div className="card-header flex items-center justify-between">
        <p className="card-title flex items-center gap-2">
          <Settings className="w-4 h-4" /> Header / Sections
        </p>
        <button
          type="button"
          onClick={() => setShowForm((s) => !s)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
        >
          <Plus className="w-4 h-4" />
          {showForm ? 'Close Form' : 'Edit Header'}
        </button>
      </div>

      <div className="card-body">
        <AdminTable title="Careers Header" data={meta ? [meta] as any : []} columns={headerCols} />
      </div>

      {showForm && (
        <div className="card-body border-t pt-6">
          <form
            onSubmit={async (e) => {
              e.preventDefault()
              try {
                await saveMeta(draft)
                toast.success('Header saved')
                setShowForm(false)
              } catch (e: any) {
                toast.error(e?.message ?? 'Failed to save header')
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="md:col-span-2">
              <label className="block text-sm font-medium">Hero Title</label>
              <input className="w-full border rounded-lg px-3 py-2" value={draft.heroTitle} onChange={(e) => setDraft({ ...draft, heroTitle: e.target.value })} />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium">Hero Subtitle</label>
              <textarea className="w-full border rounded-lg px-3 py-2" rows={2} value={draft.heroSubtitle} onChange={(e) => setDraft({ ...draft, heroSubtitle: e.target.value })} />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium">Footer Title</label>
              <input className="w-full border rounded-lg px-3 py-2" value={draft.footerTitle} onChange={(e) => setDraft({ ...draft, footerTitle: e.target.value })} />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium">Footer Subtitle</label>
              <textarea className="w-full border rounded-lg px-3 py-2" rows={2} value={draft.footerSubtitle} onChange={(e) => setDraft({ ...draft, footerSubtitle: e.target.value })} />
            </div>
            <div className="md:col-span-2 flex justify-end gap-3">
              <button type="button" className="px-4 py-2 rounded-lg border" onClick={() => setDraft(meta ? { heroTitle: meta.heroTitle, heroSubtitle: meta.heroSubtitle, footerTitle: meta.footerTitle, footerSubtitle: meta.footerSubtitle } : draft)}>Reset</button>
              <button type="submit" disabled={isPending} className="px-4 py-2 rounded-lg bg-blue-600 text-white">
                {isPending ? 'Saving…' : 'Save Header'}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}
