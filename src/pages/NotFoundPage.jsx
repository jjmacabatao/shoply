import React from 'react'
import MainLayout from '../layouts/MainLayout'
import PageNotification from '../shared/components/PageNotification'
import Button from '../shared/components/Button'
import { ArrowLeft } from 'lucide-react'

const NotFoundPage = () => {
  return (
     <MainLayout>
            <PageNotification>
                <p className='pb-5'>Page not found!</p>
                <Button onClick={() => window.history.back()} variant={'outline'}>
                        <div className='flex gap-1'>
                            <ArrowLeft strokeWidth={1.5} /> Back
                        </div>
                    </Button>
            </PageNotification>
    </MainLayout>
  )
}

export default NotFoundPage