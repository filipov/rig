// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { renderToString } from 'react-dom/server'
import Svg from '../../components/svg'

import imagick from 'imagemagick'

export default (req, res) => {
  res.statusCode = 200

  const url = new URL(req.url, 'http://localhost')

  const name = url.searchParams.get('name') || 'incognito'

  const svgSource = renderToString(<Svg name={name} />)

  res.setHeader('Content-Type', 'image/jpeg')

  imagick.resize({
    srcData: svgSource,
    srcFormat: 'svg',
    format: 'jpg',
    height: 256,
    width: 1024,
  }, (err, stdout, stderr) => {
    if (err) throw err
    if (stderr) throw stderr

    res.write(Buffer.from(stdout, 'binary'))

    res.end()
  })
}
