import React, { useEffect } from 'react';
import { Button } from '../atoms/Button';
import { Card } from '../atoms/Card';
import { DateTime } from '../atoms/DateTime';
import { Icon } from '../atoms/Icon';
import { getQuote } from './inspirationalQuotes';
export type ComposerProps = {
  className?: string;
};

export const Composer: React.FC<ComposerProps> = () => {
  const [message, setMessage] = React.useState('');
  const [quote, setQuote] = React.useState('');
  useEffect(() => {
    const quote = getQuote();
    setQuote(`${quote.quote} - ${quote.author}`);
  }, []);

  const getPostCountComponent = () => {
    const styles = `text-xs relative -mt-7 mr-6`;
    const charsLeft = 280 - message.length;
    let colors = charsLeft < 18 ? 'text-orange-500' : 'text-gray-500';
    if (charsLeft < 0) {
      colors = 'text-red-500';
    }
    return <span className={[styles, colors].join(' ')}>{charsLeft}</span>;
  };
  return (
    <Card className="flex-col justify-center items-center bg-gray-800 py-2">
      <div className="w-full">
        <h2>Create Post</h2>
      </div>
      <div className="w-full">
        <textarea
          className="w-full h-36 bg-gray-900 rounded-md p-4 pb-6 text-sm"
          placeholder={quote}
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        />
        <div className="flex justify-end">{getPostCountComponent()}</div>
      </div>
      <div className="flex flex-row w-full">
        <div className="bg-gray-900 w-full flex rounded-md mr-2">
          <div className="flex flex-1 p-2">
            <Button px={2} ariaLabel="emoji" title="emoji">
              <Icon icon="EMOTION" p={1} />
            </Button>
            <Button px={2} ariaLabel="emoji" title="emoji">
              <Icon icon="IMAGE_ADD" p={1} />
            </Button>
            <Button px={2} ariaLabel="create poll" title="create poll">
              <Icon icon="CHAT_POLL" p={1} />
            </Button>
            <DateTime className="ml-auto" />
          </div>
        </div>
        <Button ariaLabel="Post message" title="Post message" variant="primary">
          Post
        </Button>
      </div>
    </Card>
  );
};
