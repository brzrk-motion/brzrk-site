import { Link } from 'react-router-dom'

type Product = {
  name: string
  role: string
  status: string
  statusVariant: 'rc' | 'oss' | 'experimental'
  description: string
  href?: string
}

const products: Product[] = [
  {
    name: 'Playblast',
    role: 'Flagship OSS adoption test',
    status: 'Release candidate · open source · self-hosted',
    statusVariant: 'rc',
    description:
      'Self-hosted video proofing for studios that need versions, timestamped feedback, annotations, and approvals without shipping media to a third-party cloud.',
    href: '/playblast',
  },
  {
    name: 'Nightshift',
    role: 'OSS credibility channel',
    status: 'Open source · 0.1 packaging pending',
    statusVariant: 'oss',
    description:
      'A focused open-source utility in early packaging. Not positioned as a commercial product.',
  },
  {
    name: 'Banshee Voice',
    role: 'Contingent experiment',
    status: 'Experimental / dogfood',
    statusVariant: 'experimental',
    description:
      'Internal voice tooling explored as a contingent experiment. Not available for external use.',
  },
  {
    name: 'Owner Operator',
    role: 'Bounded creative experiment',
    status: 'Experimental / demo slice',
    statusVariant: 'experimental',
    description:
      'A bounded creative-technical demo slice. Exploratory, not a shipping product.',
  },
]

export function Products() {
  return (
    <div className="page">
      <div className="container">
        <header className="page__header">
          <h1>Products</h1>
          <p className="page__intro">
            brzrk builds a small portfolio of focused tools. Status labels are
            honest — not everything here is commercially available or ready for
            broad adoption.
          </p>
        </header>

        <div className="product-grid">
          {products.map((product) => (
            <article key={product.name} className="product-card">
              <h3>{product.name}</h3>
              <span className="product-card__role">{product.role}</span>
              <span
                className={`product-card__status product-card__status--${product.statusVariant}`}
              >
                {product.status}
              </span>
              <p className="product-card__desc">{product.description}</p>
              {product.href && (
                <Link to={product.href} className="product-card__link">
                  Learn more →
                </Link>
              )}
            </article>
          ))}
        </div>

        <p className="external-note" style={{ marginTop: 'var(--space-xl)' }}>
          Internal infrastructure tools (riot, Bloodmachine, Battle Box) are not
          listed here — they support brzrk development, not external product
          offerings.
        </p>
      </div>
    </div>
  )
}
