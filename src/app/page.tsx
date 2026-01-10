// Forces dynamic loading on NextJS
export const dynamic = "force-dynamic";

const mocks = [
	"https://bgub5o9kv5.ufs.sh/f/DOPeaVgNRp2ZLRVH1SPw9F6HafuEp2oTrDvcOXKdNYSh5n4A",
	"https://bgub5o9kv5.ufs.sh/f/DOPeaVgNRp2Z5v36EtWyS8MhH7ZujQIdgzC42cAO9P3pqsvi",
	"https://bgub5o9kv5.ufs.sh/f/DOPeaVgNRp2Z8ciwpSTNZoJ1b9W2QjGFpm4RysEOvlMIXq0e",
	"https://bgub5o9kv5.ufs.sh/f/DOPeaVgNRp2ZizNn23d4oZA62lFK3NcqzQbeahDrkOmfGjn8",
	"https://bgub5o9kv5.ufs.sh/f/DOPeaVgNRp2ZPNum3Rcmhs8IpGydSoiuN6VZPObQWR5x3g4F",
	"https://bgub5o9kv5.ufs.sh/f/DOPeaVgNRp2Zq1cry8wpMQrG4DFHoygzL2RKvUB7Ed9x5u0c",
];

const mockImages = mocks.map((url) => ({ id: url.split("/").pop(), url: url }));

export default function HomePage() {
	return (
		<main className="">
			<div className="flex flex-wrap gap-5" id="gallery">
				{[...mockImages].map((image) => (
					<div className="w-72 hover:scale-120" key={image.id}>
						{/** biome-ignore lint/performance/noImgElement: image dimensions unknown */}
						<img alt="mocks for the gallery" src={image.url} />
					</div>
				))}
			</div>
		</main>
	);
}
