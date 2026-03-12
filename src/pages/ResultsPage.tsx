import ResultsStrip from '../sections/ResultsStrip';

const ResultsPage = () => {
  return (
    <>
      <section className="section">
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <p style={{ fontSize: 13, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#a5b4fc' }}>
            Client Results
          </p>
          <h1 style={{ fontSize: 30, marginTop: 10, marginBottom: 10 }}>Marketing outcomes we&apos;re proud of</h1>
          <p style={{ fontSize: 15, color: '#cbd5f5' }}>
            Every engagement is engineered around one thing: measurable revenue impact. Explore a snapshot of the
            Shopify brands, DTC stores and service businesses we&apos;ve guided to sustainable growth.
          </p>
        </div>
      </section>
      <ResultsStrip />
    </>
  );
};

export default ResultsPage;

