import { Card, CardContent } from '@/components/ui/card'
import { TableDemo } from '../components/TableDemo'
import { StatisticsSection } from '../components/StatisticsSection'
import dynamic from 'next/dynamic';

// Dynamically import Map with ssr set to false
const Map = dynamic(() => import('../components/Map'), { ssr: false });


function DashboardPage() {

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
