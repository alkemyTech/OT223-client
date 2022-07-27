import React from 'react';
import { Col, Row } from 'reactstrap';
import CustomSlider from '../../components/slider';
import CardNew from '../../components/card-news'

function News() {
  return (
    <>
      <CustomSlider />
      <h1 className='text-center mt-4'>Novedades</h1>
      <br />
      <Row
        className='mb-5'
      >
        <Col
          xs='12'
          sm='12'
          md='12'
          lg='6'
          xl='6'
          className='my-2 p-3'
        >
          <CardNew
            urlImage='https://s3-alpha-sig.figma.com/img/3780/a422/929e599bbabdfcf50b1a611f32d08436?Expires=1658707200&Signature=PXG~AaxTnmqV18kCWqzJfWDbVsw6WF1VPJksjj8jo5NCUUSNEuZAC5q6SkwYah9MeOb6~vIT7zmiC8T-To2VeTJl5ywI7vET0IRhz-jegnxQ-G-nsy3FOHA8LucKEfTg3m9jXDiEHJLktMFjPflBZjraZBRD1KFSfe3JjZBeTBLbCcdWBXW7VAPUISLvErj4BMCGE3vFLIctQUyF-fsLQ5XrsWqPvKnkM4ooTRf1Z~BDp-vZgkLXObU627zrb5Irx~ryR2589MhjaaTUCMVe2lQwPPX0ThTrMmj2UewgwTWcJH26r8XHeHe0ISK5RughxlpIoT-YKcdD5LiQq6NrMQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
            alt='demo'
          />
        </Col>
        <Col
          xs='12'
          sm='12'
          md='5'
          lg='6'
          xl='6'
          className='my-2'
        >
          <CardNew
            urlImage='https://s3-alpha-sig.figma.com/img/3780/a422/929e599bbabdfcf50b1a611f32d08436?Expires=1658707200&Signature=PXG~AaxTnmqV18kCWqzJfWDbVsw6WF1VPJksjj8jo5NCUUSNEuZAC5q6SkwYah9MeOb6~vIT7zmiC8T-To2VeTJl5ywI7vET0IRhz-jegnxQ-G-nsy3FOHA8LucKEfTg3m9jXDiEHJLktMFjPflBZjraZBRD1KFSfe3JjZBeTBLbCcdWBXW7VAPUISLvErj4BMCGE3vFLIctQUyF-fsLQ5XrsWqPvKnkM4ooTRf1Z~BDp-vZgkLXObU627zrb5Irx~ryR2589MhjaaTUCMVe2lQwPPX0ThTrMmj2UewgwTWcJH26r8XHeHe0ISK5RughxlpIoT-YKcdD5LiQq6NrMQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
            alt='demo'
          />
        </Col>
      </Row>
    </>
  )
}

export default News;
