import { company } from '@utils/constants'
import './LocationBlock.css'

// "Conveniently located at:" + endereço + área de atendimento.
export default function LocationBlock() {
  return (
    <section className="section location-block">
      <div className="container location-block__inner">
        <p className="location-block__lead">Conveniently located at:</p>
        <a
          className="location-block__address"
          href={company.mapLink}
          target="_blank"
          rel="noreferrer"
        >
          {company.address}
        </a>
        <p className="location-block__area">{company.serviceArea}</p>
      </div>
    </section>
  )
}
