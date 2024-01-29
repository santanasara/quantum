import Accordion from '../../../components/Accordion';

const urlGenerator = (componentName) =>
  `https://docs.google.com/forms/d/e/1FAIpQLSewdS_VhSt_JSFOxiuiIc-auEj0MQwn_P_WiXYhAEAE1DqJhg/viewform?entry.1112120969=${componentName}`;

const EvaluationForm = ({ componentName }) => (
  <Accordion
    items={[
      {
        content: (
          <ul>
            <li>
              <iframe
                title="Rate our Documentation"
                src={`${urlGenerator(componentName)}`}
                width="992"
                height="600"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
              >
                Carregando…
              </iframe>
            </li>
          </ul>
        ),
        opened: true,
        title: '⭐⭐⭐⭐⭐ Rate our Documentation',
      },
    ]}
  />
);

export default EvaluationForm;
