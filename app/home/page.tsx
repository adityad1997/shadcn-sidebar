'use client'

import { Card, CardContent } from '@/components/ui/card'
import { useContext } from 'react'
import { ThemeContext } from '../components/Provider'
import TitlePage from '../components/TitlePage'
import { TableDemo } from '../components/TableDemo'
import Map from '../components/Map' 
import { StatisticsSection } from '../components/StatisticsSection' // Import the new statistics section

function DashboardPage() {
    const theme = useContext(ThemeContext);

    return (
        <>        
            {/* Map Title and Subtitle Outside the Map Container */}
            <div className="text-center mb-4">
                <h2 className="text-xl font-semibold">Map of Shops</h2>
                <p className="text-sm text-gray-600">Click on a marker to view details and take action</p>
            </div>

            {/* Map Section */}
            <Card className='mb-10 border-dashed'>
                <CardContent className='p-4'>
                    <Map />
                </CardContent>
            </Card>

            <div className="mb-10">
                <TableDemo />
            </div>

            {/* Statistics Section */}
            <StatisticsSection />
        </>
    )
}

export default DashboardPage;
