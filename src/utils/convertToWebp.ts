// import Convertio from 'convertio'
// import fs from 'fs'

import webp from 'webp-converter'

export async function convertToWebp(
  input: string,
  output: string
): Promise<void> {
  await webp.cwebp(input, output, '-q 80')
  /*
		const fsInput = fs.readFileSync(input)
		const api = new Convertio(process.env.CONVERT_KEY as string)
		const conversion = await api.convertFromBuffer(fsInput, 'webp', {
				fileName: 'arquivo.webp'
		})
		while (true) {
				const status = await api.getStatus(conversion.id)
				if (status.stepPercent === 100) break
		}
		const result = await api.getFileContent(conversion.id)
	fs.writeFileSync(output, result)
	*/
}
