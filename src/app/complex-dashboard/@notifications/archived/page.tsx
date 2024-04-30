import React from 'react'
import Link from 'next/link'
import Card from '../../../../components/card'

const ArchivedNotification = () => {
  return (
    <Card>
      <div>ArchivedNotification</div>
      <Link href="/complex-dashboard">Default</Link>
    </Card>
  )
}

export default ArchivedNotification